import React from 'react'

export default class GoodsPage extends React.Component {
    render() {
        return (
            <div>
                <button type="button" onClick={this.props.history.go.bind(this,-1)}>返回</button>产品页面
            </div>
        )
    }
}
