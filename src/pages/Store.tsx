import storeItem from '../data/item.json'
import {Row, Col} from 'react-bootstrap'
import StoreItem from '../components/StoreItem'

const Store = () => {
  return (
    <>
    <div>Store</div>
    <Row xs={1} md={2} lg={3} className="g-3" >
        {
            storeItem.map((item)=>{
                return (
                    <Col key={item.id}>
                        <StoreItem {...item}/>
                        </Col>
                )
            })
        }
        
    </Row>
    </>
  )
}

export default Store