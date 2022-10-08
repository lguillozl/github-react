import styled from 'styled-components';
import props from './ProfileData';
import { Button } from './Button';
import Icon  from './icon';

const ProfileStyled = styled.div`
  grid-area: Profile;
  .avatar {
    border-radius: 50%;
    border: 1px solid var(--grey-1);
    overflow: hidden;
    box-sizing: border-box;
    margin-block-end: 1.5rem;
  }
  .name {
    font: var(--headline1);
    color: var(--white);
    margin: 0;
    margin-block-end: .5rem;
  }
  .username {
    margin-block-start: .5rem;
    margin-block-end: 1.5rem;
    font: var(--headline2-ligth);
  }
  .info {
    color: var(--grey-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: calc(.5rem);
    margin-block: 1rem;
    font: var(--body2-semi-bold);
  }
  a:hover {
    text-decoration: underline;
  }

  .buttons {
    display: flex;
    gap: .5rem;
    margin-block-end: 1.5rem;
  }
`;

export const Profile = () => {

  const { name, login, avatar_url, bio, followers, following, location, twitter_username, blog } = props;

  return (
    <ProfileStyled>
      <img src={ avatar_url } className='avatar' width="278" height="278" alt=""/>
      <p className="name">{ name }</p>
      <p className="username">{ login }</p>
      <div className="buttons">
        <Button 
          text='Follow'
          link="#"
        />
        <Button 
          text='Sponsor'
          icon={<Icon name="Heart" size={24} color="var(--pink)"/>}
        />
      </div>
      <p className="bio">
        { bio }
      </p>
      <p className="followers info">
          ° { followers } <span>Followers</span>  <span>°</span>  { following } <span>Following</span>
      </p>
      <p className="location info">
        { location }
      </p>
      <a className='info' href="">
        { blog }
      </a>
      <a className='info' href={`https://twiter.com/${twitter_username}`} >
        @{ twitter_username }
      </a>
    </ProfileStyled>
  )
}
