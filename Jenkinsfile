pipeline {
    agent {
      dockerfile {
        args '-u root:root'
        filename 'docker/Dockerfile'
        reuseNode true
      }
    }
    stages {
        stage('.npmrc') {
          steps {
            // Insert .npmrc
            withCredentials([file(credentialsId: 'npmrc', variable: 'CONFIG')]) {
                sh "touch ~/.npmrc"
                sh "echo '//registry.npmjs.org/:always-auth=false' >> ~/.npmrc"
                sh '''
                    cat ${CONFIG} >> ~/.npmrc
                '''
                sh '''
                    cat ~/.npmrc
                '''
            }
          }
        }
        stage('Install dependencies') {
            steps {
                sh '''
                    npm install
                '''
            }
        }       
        stage('Build') {
            steps {
                sh '''
                    npm run build
                '''
            }
        }
        stage ('Zipping Artifact') {
            when { branch 'master' }
            steps {
                sh '''
                    rm -rf dist.zip
                '''
                zip zipFile: 'dist.zip', archive: false, dir: 'build'
            }
        }
        stage('Push React CDK Site UI artifact to Artifactory') {
            when { branch 'master' }
            steps {
                withCredentials([usernamePassword(credentialsId:"diaas-rw", passwordVariable:"ARTIF_PASSWORD", usernameVariable:"ARTIF_USER")]) {
                    sh '''
                        curl -u${ARTIF_USER}:${ARTIF_PASSWORD} -T ./dist.zip "https://artifactory.csc.com/artifactory/diaas-generic/react-cdk-site/${BRANCH_NAME}/react-cdk-site-bundle.${BUILD_ID}.zip"
                    '''
                }
            }
        }
        stage('Deploy to S3 bucket') {
            when { branch 'master' }
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'DIAAS-AWS-CLI',
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
                ]]) {
                    withAWS(role:"arn:aws:iam::665158502186:role/ISS_DIAAS_PowerUser"){
                        sh '''
                            aws s3 rm s3://design-system-react-cdk-site/ --recursive
                            aws s3 cp ./build/ s3://design-system-react-cdk-site/tools/react/ --recursive
                        '''
                    }
                }
            }
        }
    }
}