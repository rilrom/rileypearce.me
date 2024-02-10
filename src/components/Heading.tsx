import { PropsWithChildren } from "react";

export default function Heading(props: PropsWithChildren) {
  return (
    <h1 className="font-mono font-medium text-heading text-3xl xs:text-5xl leading-[2.5rem] xs:leading-[4rem] -ml-[1px] xs:-ml-[3px]">
      {props.children}
    </h1>
  )
}