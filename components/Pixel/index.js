import Head  from 'next/head'

import FACEBOOK_PIXEL_1 from '../../analytics/pixel-1'

export default ({name}) => {

  return(
    <Head>
      {name === 'FACEBOOK_PIXEL_1' && <FACEBOOK_PIXEL_1 />}
    </Head>
  )
}
