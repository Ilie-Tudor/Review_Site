import * as React from "react"
import ArticleWrapper from "../components/ArticleWrapper"
import Header from "../components/Header"



import Title  from "../components/MappedComponents/Title"
import Subtitle1 from "../components/MappedComponents/Subtitle1"
import Subtitle2 from "../components/MappedComponents/Subtitle2"
import Subtitle3 from "../components/MappedComponents/Subtitle3"
import Paragraph from "../components/MappedComponents/Paragraph"
import CustomizableInlineBox from "../components/MappedComponents/CustomizableInlineBox"
import Table from "../components/MappedComponents/Table"
import Chart from "../components/MappedComponents/Chart"



// markup
const IndexPage = () => {
  return (
    <>
    <Header/>

    <ArticleWrapper>
      <Title
        text={"Titlu"}
      />
      <Subtitle1
        text={"ceva aici"}
      />
      <Subtitle2
        text={"ceva aici"}
      />
      <Subtitle3
        text={"ceva aici"}
      />
      <Paragraph
        content={["niste text aici",<CustomizableInlineBox>Si ceva inline</CustomizableInlineBox>, "si alt text aici"]}
      />
      <Table
        n_columns = {3}
        column_heads = {["age","name","ceva"]}
        content = {[1,2,3,4,5,6,7,8,9]}
      />
      <Chart/>
    </ArticleWrapper>

  
    </>
  )
}

export default IndexPage
