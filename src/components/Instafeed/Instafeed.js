import Instafeed from 'react-instafeed';

  const instafeedTarget = 'instafeed';
  return (
    <div id={instafeedTarget}>
      <Instafeed
        limit='5'
        ref='instafeed'
        resolution='standard_resolution'
        sortBy='most-recent'
        target={instafeedTarget}
        template=''
        userId='userIdInstagramApiString'
        clientId='clientIdInstagramApiString'
        accessToken='accessTokenInstagramApiString'
      />
    </div>
  )