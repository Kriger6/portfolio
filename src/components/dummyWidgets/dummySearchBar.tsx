
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
                <div style={{position: 'inherit', background: '#5c5c5c', width: '50px', height: '9px',
                    left: '10px', top: '15px', borderRadius: '10px' }}></div>
                <div style={{
                    position: 'inherit', background: '#5c5c5c', width: '130px', height: '6px    ',
                    left: '10px', top: '32px', borderRadius: '10px'
                }}></div>
            </div>
        </div>
    )
}

export default DummySearchBar

