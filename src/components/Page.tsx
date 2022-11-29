import React, { useEffect } from "react"

type Props = { title: string; children: React.ReactNode }

const Page: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    document.title = `${props.title} | E-Store Proj`
    window.scrollTo(0, 0)
  }, [props.title])
  return <>{props.children}</>
}

export default Page
