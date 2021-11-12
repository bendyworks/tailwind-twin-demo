import React from 'react';
import LockImage from '../LockImage';
import ProfileImage from '../ProfileImage';
import {
  CardContainer,
  CardContent,
  CardImage,
  CardText,
  CardTitle,
  Date,
  Name,
  ProfileImageContainer,
  Wrapper,
} from '.';

const TwinCard = () => (
  <Wrapper>
    <CardImage
      style={{
        backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')",
      }}
      title="Woman holding a mug"
    />
    <CardContent>
      <div className="mb-8">
        <CardContainer>
          <LockImage />
          Members only
        </CardContainer>
        <CardTitle>Can twin.macro make you a better developer?</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </CardText>
      </div>
      <ProfileImageContainer>
        <ProfileImage />
        <div>
          <Name>Jason Stewart</Name>
          <Date>May 5</Date>
        </div>
      </ProfileImageContainer>
    </CardContent>
  </Wrapper>
);

export default TwinCard;
