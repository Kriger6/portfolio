import DummyText from "./dummyText"



const DummyRectangle = () => {

    const internalLine = <div></div>

    return (
        <div style={{
            height: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'space-evenly'
        }}>
            <DummyText w={40} h={40} radiusOffset={0.5} />
            <div style={{
                display: 'inherit', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',
            height: '18%'}}>
                <DummyText w={80} h={10} />
                <DummyText w={100} h={8} />
            </div>
            <DummyText w={70} h={15} content={<DummyText w={40} h={6} bColor="#b8b8b8" />} />
        </div>
    )
}

export default DummyRectangle