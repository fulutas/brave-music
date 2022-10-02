import React from "react"
import ContentLoader from "react-content-loader"

const TopChartsLoader = (props) => (
  <ContentLoader 
    speed={5}
    width={468}
    height={220}
    viewBox="0 0 468 220"
    backgroundColor="#383792"
    foregroundColor="#cdcdcd"
    {...props}
  >
    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" /> 
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" /> 
    <circle cx="20" cy="20" r="20" /> 
    <circle cx="448" cy="20" r="13" /> 
    <rect x="48" y="62" rx="3" ry="3" width="88" height="6" /> 
    <rect x="48" y="80" rx="3" ry="3" width="52" height="6" /> 
    <circle cx="20" cy="74" r="20" /> 
    <circle cx="448" cy="74" r="13" /> 
    <rect x="49" y="121" rx="3" ry="3" width="88" height="6" /> 
    <rect x="49" y="139" rx="3" ry="3" width="52" height="6" /> 
    <circle cx="21" cy="133" r="20" /> 
    <circle cx="449" cy="133" r="13" /> 
    <rect x="50" y="177" rx="3" ry="3" width="88" height="6" /> 
    <rect x="50" y="195" rx="3" ry="3" width="52" height="6" /> 
    <circle cx="22" cy="189" r="20" /> 
    <circle cx="450" cy="189" r="13" />
  </ContentLoader>
)

export default TopChartsLoader


// backgroundColor="#383792"
// foregroundColor="#cdcdcd"


