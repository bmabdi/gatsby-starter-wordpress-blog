import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./Button"
import { ImLocation } from "react-icons/im"
import parse from "html-react-parser"
import Aos from "aos"
import "aos/dist/aos.css"
import { GlobalStyle } from "./styles/GlobalStyles"

const Trips = ({ heading }) => {
  useEffect(() => {
    Aos.init({})
  }, [])

  const data = useStaticQuery(graphql`
    query TripsQuery {
      allWpPost(
      sort: { fields: [date], order: DESC }
      limit: 100
      skip: 0
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt,
        slug
      }
    }
    }
  `)

  function getTrips(data) {
    const tripsArray = []
    data.allWpPost.nodes.forEach((item, index) => {
      tripsArray.push(

        <ProductCard
          key={index}
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <ProductImg
            alt={item.excerpt}
            
          />
          <ProductInfo>
            <TextWrap>
             
              <ProductTitle>{item.title}</ProductTitle>
            </TextWrap>
            
             
          </ProductInfo>
          
          <ProductDescription>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{item.excerpt}</ProductTitle>
            </TextWrap>
            
            <Link to={item.slug} itemProp="url">
              <span itemProp="headline">{parse(item.title)}</span>
            </Link>
          </ProductDescription>

          <ProductDescription>
             
            
            <Button
              to= "{item.slug}"
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.date}
            </Button>
          </ProductDescription>
        </ProductCard>
      )
    })
    return tripsArray
  }

  return (   
    <div className="global-wrapper">
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>{getTrips(data)}</ProductWrapper>
    </ProductsContainer>
    </div>
  )
}

export default Trips

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
  color:black;
`
const ProductImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
  color:black;
  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`
const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
  color:black;
  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 125px;
  color:black;
`

const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
