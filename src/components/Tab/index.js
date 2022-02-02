import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import {
    Box,
    Divider,
  } from 'native-base';
class Tabs extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Array).isRequired,
    }
  
    constructor(props) {
      super(props);
  
      this.state = {
        activeTab: this.props.children[0].props.label,
      };
    }
  
    onClickTabItem = (tab) => {
      this.setState({ activeTab: tab });
    }

    render() {
        const {
          onClickTabItem,
          props: {
            children,
          },
          state: {
            activeTab,
          }
        } = this;
    
        return (
          <Box >
          <Box style={{ overflowX: "scroll"}}>
          <Box className="tabs" alignSelf="center">
            <ol className="tab-list" >
              {children.map((child) => {
                const { label } = child.props;
    
                return (
                  <Tab
                    activeTab={activeTab}
                    key={label}
                    label={label}
                    onClick={onClickTabItem}
                  />
                );
              })}
            </ol>
          </Box>
          </Box>

            <Divider  bg="trueGray.200" height="1" />

          <div className="tabs">
          <div className="tab-content">
              {children.map((child) => {
                if (child.props.label !== activeTab) return undefined;
                return child.props.children;
              })}
            </div>
            </div>
            </Box>

        );
      }
    }
    
    export default Tabs;