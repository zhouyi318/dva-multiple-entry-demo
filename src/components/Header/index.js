import React, { PureComponent } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class Header extends PureComponent{
    constructor(props){
      super(props)
      this.state={}
    }

    componentDidUpdate(){
      // console.log(this.props)
    }

    render(){
      // // let {title} = header
      // // console.log(this.props)
      // // let otherheader = this.props.home?this.props.home:null;
      // console.log(this.props.home)
      let { header } = this.props.home;
      // console.log(header)
      return(
        <NavBar 
          mode="dark"
          icon = {header?header.icon:null}
          onLeftClick={header?header.onLeftClick:null}
          leftContent={header?header.leftContent:null}
          rightContent={header?header.rightContent:null}
        >{header?header.title:null}</NavBar>
      )
    }
}

// {otherheader?otherheader.herder.title?otherheader.herder.title:null:null}

// const Header = (props) => {
//   let  header  = props.props.home? props.props.home.header:null;
//   console.log(header)
//   return (
//     let {title,...args} = header;
//     <div>
//       <NavBar 
//         mode="dark"
//         onLeftClick={() => console.log('onLeftClick')}
//       >{title}</NavBar>
//     </div> 
//   );
// };

Header.propTypes = {};

export default Header;
