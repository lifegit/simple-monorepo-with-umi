import { PrimaryForm } from "@lifegit-monorepo/components";
import { Add } from "@lifegit-monorepo/core"
import React, {FC, useState} from "react";

const Index: FC = () => {
  const [v, setV] = useState(0)
  const handleFinish = ()=> {
    setV(Add(v, 1))
  }
  return (
    <div>
      <div>this is counter:</div>
      <PrimaryForm text={v} onfinish={handleFinish}/>
    </div>
  )
}
export default Index;
