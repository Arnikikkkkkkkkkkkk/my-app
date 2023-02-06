import styled from "styled-components/macro";

export const A = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
&:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
}
`;

export const Li = styled.li`
list-style: none;
`;

export const Main = styled.div`
flex: 1 1 auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

export const MainCenterblock = styled.div`
width: auto;
flex-grow: 3;
padding: 20px 40px 20px 111px;
`;

export const CenterblockContent = styled.div`
display: flex;
flex-direction: column;
`;

export const CenterblockSearch = styled.div`
width: 100%;
border-bottom: 1px solid #4E4E4E;
margin-bottom: 51px;
display: flex;
flex-direction: row;
align-items: center;
`;

export const SearchSvg = styled.svg`
width: 17px;
height: 17px;
margin-right: 5px;
stroke: #FFFFFF;
fill: transparent;
`;

export const SearchText = styled.input`
flex-grow: 100;
background-color: transparent;
border: none;
padding: 13px 10px 14px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;

&::placeholder {
    background-color: transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}
`;

export const CenterblockTitle = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
margin-bottom: 45px;
`;

export const CenterblockFilter = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 51px;
`;

export const FilterTitle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;
`;

export const FilterButton = styled.button`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border-radius: 60px;
padding: 6px 20px;

&:not(:last-child) {
    margin-right: 10px;
}
`;


export const FilterButtons = styled.button`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border-radius: 60px;
padding: 6px 20px;
background-color: #181818;
color: ${props => props.isSelected ? '#AD61FF' : '#FFFFFF'};
border: ${props => props.isSelected ? '2px solid #AD61FF' : ' 1px solid #FFFFFF'};
&:not(:last-child) {
    margin-right: 10px;
};

`;

export const ContentTitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-bottom: 24px;
`;

export const ContentPlaylist = styled.div`
display: flex;
flex-direction: column;
height: 550px;
overflow: auto;

::-webkit-scrollbar { width: 0; }
`;



export const PlaylistTitleCol = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
`;

export const PlaylistTitleCol01 = styled(PlaylistTitleCol)`
width: 447px;
`;

export const PlaylistTitleCol02 = styled(PlaylistTitleCol)`
width: 321px;
`;

export const PlaylistTitleCol03 = styled(PlaylistTitleCol)`
width: 245px;
`;

export const PlaylistTitleCol04 = styled(PlaylistTitleCol)`
width: 60px;
text-align: end;
`;

export const PlaylistTitleSvg = styled.svg`
width: 12px;
height: 12px;
fill: transparent;
stroke: #696969;
`;

export const PlaylistItem = styled.div`
width: 100%;
display: block;
margin-bottom: 12px;
`;

export const PlaylistTrack = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const TrackTitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 447px;
`;

export const TrackTitleImage = styled.div`
width: 51px;
height: 51px;
padding: 16px;
background: #313131;
display: flex;
align-items: center;
justify-content: center;
margin-right: 17px;
`;

export const TrackTitleSvg = styled.svg`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4E4E4E;
`;

export const TrackTitleLink = styled(A)`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
&:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
}
`;

export const TrackTitleSpan = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #4E4E4E;
`;

export const TrackAuthor = styled.div`
width: 321px;
display: flex;
justify-content: flex-start;
`;

export const TrackAuthorLink = styled(A)`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
text-align: left;
`;

export const TrackAlbum = styled.div`
width: 245px;
`;

export const TrackAlbumLink = styled(A)`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
`;

export const TrackTimeSvg = styled.svg`
width: 14px;
height: 12px;
margin-right: 17px;
fill: transparent;
stroke: #696969;
`;
// !!!!!!!!!!!!!!!!!!!!!!!//
export const TrackTitleText = styled.div`
width: 430px;
`;

export const TrackTime = styled.div`
width: 60px;
display: flex;
flex-direction: raw;
align-items: center;
`

export const TrackTimeText = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #696969;
`;

export const PlaylistTrackSkeleton = styled(PlaylistTrack)`
justify-content: flex-start;
gap:14px;
`;

export const SkeletonImage = styled.div`
padding: 0;
width: 51px;
height: 51px;
background: #313131
`;

export const SkeletonTitle = styled(SkeletonImage)`
padding-right: 46px;
width: 356px;
height: 19px;
`;

export const SkeletonAuthor = styled(SkeletonImage)`
padding-right: 36px;
width: 271px;
height: 19px;
`;

export const SkeletonAlbum = styled(SkeletonImage)`
width: 305px;
height: 19px;
`;

export const Dropdown = styled.div`
position: absolute;
width: 248px;
height: 305px;
background: #313131;
border-radius: 12px;
`;

export const DropdownPerformer = styled(Dropdown)`
left: 443px;
top: 288px;
`;

export const DropdownGenre = styled(Dropdown)`
left: 741px;
top: 288px;
`;

export const DropdownList = styled.ul`
display: flex;
margin: 34px;
flex-direction: column;
align-items: flex-start;
width: 180px;
gap: 30px;  
overflow: scroll;        
width: 180px;
height: 237px;
&::-webkit-scrollbar{
    width: 2px;
}
&::-webkit-scrollbar-thumb {
    max-height: 20px;
    background-color: #FFFFFF;
}
`;

export const DropdownItem = styled(Li)`
cursor: pointer;
margin: 0 -2px;
padding: 2px 2px;
:hover{
    border-color: #AD61FF;
    color: #AD61FF;
    text-decoration: underline;
}
:active{
    border-color: #AD61FF;
    color: #AD61FF;
    cursor: pointer;
}
`;

export const Year = styled.div`
position: absolute;
left: 597px;
top: 288px;
width: 403px;
height: 92px;
background: #313131;
border-radius: 12px;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
padding: 34px;
gap: 24px;
`;

export const YearInput = styled.input`
width: 0;
height: 0;
position: absolute;
opacity: 0;
z-index: -1;
`;

export const Label = styled.label``;



export const Item = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: black;
  border: 1px solid #ccc;
`;
export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: white;
    &::after {
      content: "\f111";
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 10px;
      height: 10px;
      margin: 3px;
    }
  }
  &:checked + ${Item} {
    background: black;
    border: 2px solid black;
  }
  &:checked + ${RadioButtonLabel} {
    background: black;
    border: 1px solid black;
    &::after {
      content: "\f111";
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 10px;
      height: 10px;
      margin: 3px;
    }
  }
`;








