import React from "react";
import {PrimaryButton} from '@lifegit-monorepo/ui'

const Index: React.FC<{text: React.ReactNode, onfinish?: ()=> void}> = ({
  text,
  onfinish
}) => (
  <>
    <div>{ text }</div>
    <PrimaryButton onClick={onfinish} >click</PrimaryButton>
  </>
)
export default Index;
