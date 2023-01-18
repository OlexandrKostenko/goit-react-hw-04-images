import { Circles } from  'react-loader-spinner'

export const Loader = () => {
 return ( 
  <Circles
  height="80"
  width="80"
  color="#303f9f"
  ariaLabel="circles-loading"
  wrapperStyle={{justifyContent: 'center'}}
  wrapperClass=""
  visible={true}
    />
)};