import React from "react";

export default function JSForm(Comp) {
  return class WrapperComp extends React.Component {
    constructor(props) {
      super(props);
      // debugger;
      this.state = { test: 1 };
      this.handleChange = this.handleChange.bind(this);
      this.storeRef = this.storeRef.bind(this);
    }
    handleChange(key, val) {
      console.log(key, val);
      this.setState({
        [key]: val
      });
    }
    storeRef(ref) {
      // 拿到被包裹组件实例
      // console.log((this.ref = ref));
      // console.log(this.ref.register);
    }

    render() {
      const newProps = {
        name: "HOC"
      };
      return (
        <div>
          <Comp
            ref={this.storeRef}
            handleChange={this.handleChange}
            state={this.state}
            {...this.props}
            {...newProps}
          ></Comp>
        </div>
      );
    }
  };
}
