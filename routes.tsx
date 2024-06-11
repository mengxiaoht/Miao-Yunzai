import React from "react"
import { type RouterType } from "yunzai/image/types"
import Hello from "./hello.tsx"
const Config: RouterType = [
    {
        url: "/",
        element: <Hello data={{ name: "word" }} />
  }
]
export default Config