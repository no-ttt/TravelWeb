import React, { Component } from 'react'
import { Card, Carousel } from 'travel_component'

let Item = ({ data }) => {
  return (
    <div style={{ height: 320, display: "flex", alignItems: "center" }}>
      <Card title={data.spotName} src={data.pictureUrl} loc={data.city + data.town} width={230} height={280} flip={true} link={"/spot/detail/" + data.oid}>{data.cDes}</Card>
    </div>
  )
};

export default class Recommend extends Component {
  componentDidMount() {
    const { GetHotSpotList } = this.props
    GetHotSpotList("南投縣埔里鎮")
  }
  
  render() {
    const { hotSpotList } = this.props
    return (
      <div className="content-layout">
        <div className="content-title">— 你可能會喜歡 —</div>
        <div className="content-mustlike-sutitle-layout">
          <Carousel cols={4} gap={15} data={hotSpotList.items} width={250} height={300}>
            <Item />
          </Carousel>
        </div>
      </div>

    )
  }
}
