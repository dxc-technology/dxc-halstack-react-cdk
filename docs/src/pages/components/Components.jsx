import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { types } from "./paths.js";
import { DxcSidenav, DxcBox, DxcLink } from "@dxc-technology/halstack-react";
import paths from "./paths.js";
import reactIcon from "../../common/react-icon.png";
import DocTitle from "../../common/DocTitle";
import ComponentDoc from "./common/ComponentDoc";

function Components() {
  const location = useLocation();

  const getComponentsLinks = (type) => 
    <ComponentsLinksContainer>
      {
        paths.filter(path => path.type === type)
        .sort((path1, path2) => (path1.name < path2.name ? -1 : 1))
        .reduce((result, path, i, array) => {
          if (i % 3 === 0) result.push(array.slice(i, i+3));
          return result;
        }, [])
        .map((sublist) => 
          <LinksColumn>
            {sublist.map((path,i) => (
              <li>
                <DxcLink
                  text={path.name}
                  underlined={false}
                  margin="xxsmall"
                  href={`#/components/${path.path}`}
                />
              </li>
            ))}
          </LinksColumn>
        )
      }
    </ComponentsLinksContainer>
    

  return (
    <SideNav>
      <DxcSidenav
        padding="large"
        mode="push"
        arrowDistance="50vh"
        displayArrow={false}
        navContent={
          <SideNavContainer>
            <Title>React
              <ReactLogo src={reactIcon} alt="React Logo"></ReactLogo>
            </Title>
            {Object.keys(types).map(type => (
              <React.Fragment>
                <ComponentType>{types[type]}</ComponentType>
                <ComponentsList>
                  {paths
                    .filter(path => path.type === types[type])
                    .sort((path1, path2) => (path1.name < path2.name ? -1 : 1))
                    .map(path => (
                      <NavLink
                        isActive={location.pathname.startsWith(
                          `/components/${path.path}`
                        )}
                      >
                        <Link to={`/components/${path.path}`}>{path.name}</Link>
                      </NavLink>
                    ))}
                </ComponentsList>
              </React.Fragment>
            ))}
          </SideNavContainer>
        }
        pageContent={
          <SideNavContent>
            <Route exact path="/components">
              <ComponentDoc>
                <DocTitle size={1}>Components</DocTitle>
                <ComponentTypeTitle>Forms</ComponentTypeTitle>
                <DxcBox padding="small" margin={{top: "small", bottom: "small"}}>
                  {getComponentsLinks("Forms")}
                </DxcBox>
                <ComponentTypeTitle>Navigation</ComponentTypeTitle>
                <DxcBox padding="small" margin={{top: "small", bottom: "small"}}>
                  {getComponentsLinks("Navigation")}
                </DxcBox>
                <ComponentTypeTitle>Layout</ComponentTypeTitle>
                <DxcBox padding="small" margin={{top: "small", bottom: "small"}}>
                  {getComponentsLinks("Layout")}
                </DxcBox>
                <ComponentTypeTitle>Utilities</ComponentTypeTitle>
                <DxcBox padding="small" margin={{top: "small", bottom: "small"}}>
                  {getComponentsLinks("Utilities")}
                </DxcBox>
              </ComponentDoc>
            </Route>
            {paths.map(path => (
              <Route path={`/components/${path.path}`}>
                <path.component></path.component>
              </Route>
            ))}
          </SideNavContent>
        }
      >

      </DxcSidenav>
      </SideNav>
  );
}

const SideNav = styled.div`
  width: 100%
`;

const SideNavContainer = styled.div`
  margin-bottom: 40px;
`;
const SideNavContent = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
  min-height: 100vh
`;

const Title = styled.h1`
  font-size: 24px;
  display: flex;
  align-items: center;
  color: #646464;
  font-weight: normal;
  line-height: 18px;
`;

const ReactLogo = styled.img`
  max-width: 28px;
  margin-left: 8px;
`;

const ComponentType = styled.div`
  text-transform: uppercase;
  color: gray;
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

const ComponentsList = styled.div`
  margin-left: 10px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled.div`
  padding: 3px 0px;
  & a {
    font-size: 14px;
    text-decoration: none;
    font-weight: ${({ isActive }) => (isActive && "bold") || "normal"};
    color: ${({ isActive }) => (isActive && "black") || "gray"};
  }
`;

const ComponentTypeTitle = styled.h2`
  font-size: 30px;
  font-weight: normal;
  margin-bottom: 0;
`;

const ComponentsLinksContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const LinksColumn = styled.ul`
  list-style-type:none;
  padding: 0;
  margin: 0;
  margin-right: 100px;
`;

export default Components;
