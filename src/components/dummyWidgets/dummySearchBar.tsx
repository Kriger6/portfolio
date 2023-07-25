import DummyText from "./dummyText"

const DummySearchBar = () => {
    return (
        <div style={{position: 'absolute', width: '100%'}}> 
            <div style={{
                position: 'inherit', background: '#3e3e3e', width: '100%', height: '36px', borderRadius: '5px' }}>
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

