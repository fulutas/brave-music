import React from "react"
import ContentLoader from "react-content-loader"

const TopArtistsLoader = (props) => (
    <ContentLoader 
    speed={5}
    width={500}
    height={125}
    viewBox="0 0 500 125"
    backgroundColor="#383792"
    foregroundColor="#cdcdcd"
    {...props}
  >
    <rect x="49" y="139" rx="3" ry="3" width="52" height="6" /> 
    <rect x="50" y="177" rx="3" ry="3" width="88" height="6" /> 
    <rect x="50" y="195" rx="3" ry="3" width="52" height="6" /> 
    <circle cx="22" cy="189" r="20" /> 
    <circle cx="450" cy="189" r="13" /> 
    <circle cx="60" cy="59" r="58" /> 
    <circle cx="198" cy="59" r="58" /> 
    <circle cx="334" cy="60" r="58" /> 
    <circle cx="468" cy="60" r="58" />
  </ContentLoader>
)

export default TopArtistsLoader