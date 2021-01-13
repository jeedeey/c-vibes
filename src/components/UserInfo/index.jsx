import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import Avatar from "react-md/lib/Avatars";
import FontIcon from "react-md/lib/FontIcons";
import IconSeparator from "react-md/lib/Helpers/IconSeparator";
import { Follow } from "react-twitter-widgets";
import AuthorLinks from "../AuthorLinks";
import "./UserInfo.scss";

class UserInfo extends Component {
  render() {
    const {
      name,
      location,
      bio,
      field,
      imageUrl,
      userLinks,
      authorTwitter,
    } = this.props.author;
    const { expanded } = this.props;
    const userLinksElement = (
      <AuthorLinks author={this.props.author} labeled={expanded} />
    );
    if (!imageUrl && !name && !location && !bio && !field) {
      if (userLinks) {
        return (
          <Card className="md-grid md-cell md-cell--12 user-info">
            {userLinksElement}
          </Card>
        );
      }
      return null;
    }
    return (
      <Card className="md-grid md-cell md-cell--12 user-info">
        <CardTitle
          expander={!expanded}
          avatar={imageUrl && <Avatar src={imageUrl} role="presentation"  />}
          title={name && name}
          subtitle={
            authorTwitter ? (
              <Follow
                username={userTwitter}
                options={{ count: expanded ? "none" : "none" }}
              />
            ) : (
              "User"
            )
          }
          subtitle={field && field}
        />
        <CardText expandable={!expanded}>
          {location && (
            <IconSeparator label={location} iconBefore>
              <FontIcon iconClassName="fa fa-map-marker" />
            </IconSeparator>
          )}
          <br/>
          <p>{bio && bio}</p>
        </CardText>
      </Card>
    );
  }
}

export default UserInfo;
