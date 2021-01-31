import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination, Scrollbar, EffectFade, Autoplay} from "swiper";
import FeaturedPreview from "../FeaturedPreview";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import "./FeaturedPreview.scss";

SwiperCore.use([Pagination, Scrollbar, EffectFade, Autoplay]);

class FeaturedListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        featured: postEdge.node.frontmatter.featured,
        
      });
    });
    return postList;
  }
  
  render() {
    const postList = this.getPostList();
    return (
      <div className="md-grid md-grid--no-spacing">
        <div className="md-grid md-cell--12 mobile-fix">
          <Swiper
            spaceBetween={0}
            slidesPreview={0}
            pagination={{clickable: true}}
            onSwiper={(swiper) => (swiper)}
            onSlideChange={() => ("slide change")}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}ga
            
          >
            {postList.filter(post => (
            post.featured
          )).map(post => (
            <SwiperSlide>
                <FeaturedPreview key={post.title} postInfo={post} />
            </SwiperSlide>
            
          ))}
            
          </Swiper>
        </div>
      </div>
             
      
    );
  }
}

export default FeaturedListing;
