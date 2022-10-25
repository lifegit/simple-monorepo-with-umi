import React,{FC} from "react";
import { Button } from 'antd';
import {ButtonProps} from "antd/lib/button/button";

const Index: FC<ButtonProps> = ({
  children,
  ...props
}) => (
  <Button {...props} type="primary">
    with changeset
    {children}
  </Button>
)
export default Index;
