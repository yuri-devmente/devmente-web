import { Technology } from "./technology";
export const Stack = (props) => {
  return (
    <div id='stack' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our stack</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className='row stack-group'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-md-2'>
                  <Technology title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
