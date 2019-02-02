import { graphql, compose } from 'react-apollo';
import { Row, Col } from 'antd';
import { FETCH_POI } from 'gql/poi';
import QRCode from 'qrcode';

class PoiView extends React.Component {
  static propTypes = {
    fetchPoi: PropTypes.object
  };

  state = {
    qrCode: null
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.fetchPoi.pois) {
      QRCode.toDataURL(nextProps.fetchPoi.pois[0].id.toString(), (err, url) => {
        this.setState({ qrCode: url });
      });
    }
  }

  render() {
    const { qrCode } = this.state;
    const { fetchPoi } = this.props;
    if (!fetchPoi.pois) {
      return null;
    }
    const poi = fetchPoi.pois[0];
    return (
      <div>
        {poi.cover_image && (
          <Row>
            <Col span={24}>
              <img
                style={{ width: '100%', marginBottom: '16px' }}
                src={poi.cover_image}
                alt={poi.name}
              />
            </Col>
          </Row>
        )}
        <Row type='flex' justify='space-between' align='middle'>
          <Col>
            <h1>{poi.name}</h1>
          </Col>
          {qrCode && (
            <Col>
              <img src={qrCode} alt={poi.name} />
            </Col>
          )}
        </Row>
        {poi.info_general && (
          <Row>
            <Col span={24}>
              <h3>General info</h3>
              <p>{poi.info_general}</p>
            </Col>
          </Row>
        )}
        {poi.info_architecture && (
          <Row>
            <Col span={24}>
              <h3>Architecture</h3>
              <p>{poi.info_architecture}</p>
            </Col>
          </Row>
        )}
        {poi.info_events && (
          <Row>
            <Col span={24}>
              <h3>Events</h3>
              <p>{poi.info_events}</p>
            </Col>
          </Row>
        )}
        {poi.info_others && (
          <Row>
            <Col span={24}>
              <h3>Other info</h3>
              <p>{poi.info_others}</p>
            </Col>
          </Row>
        )}
        {poi.info_others && (
          <Row>
            <Col span={24}>
              <h3>Other info</h3>
              <p>{poi.info_others}</p>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

export default compose(
  graphql(FETCH_POI, {
    name: 'fetchPoi',
    options: props => ({
      variables: {
        id: props.match.params.id
      }
    })
  })
)(PoiView);
