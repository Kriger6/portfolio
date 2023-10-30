import DummyText from "./dummyText"
import './index.css'

const DummySearchBar = () => {
    return (
        <div style={{position: 'absolute', width: '100%'}}> 
            <div className="dummy-search">
                <div style={{
                    position: 'inherit', background: '#5c5c5c', width: '90px', height: '8px',
                    left: '20px', top: 'calc(50% - 4px)', borderRadius: '10px' }}></div>
                <div style={{
                    position: 'inherit', background: '#5c5c5c', width: '22px', height: '22px',
                    right: '5px', borderRadius: '50%', top: 'calc(50% - 11px'}}></div>
            </div>
            <div style={{position: 'inherit', top: '36px', height: '70px', width: '100%'}}>
                <DummyText w={50} h={9} left={10} top={10} />
                <DummyText w={130} h={6} left={10} top={5} />
            </div>
        </div>
    )
}

export default DummySearchBar


