import React, { useEffect, useState } from 'react';
import './GroupFavList.scss';
// import { getBlindUsers } from '../GroupFavLikePageController';
import { AiOutlineStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
import {
  itemVariants,
  containerVariants,
} from '../../../../../constants/variants';

const GroupFavList = ({ isGroupManagerModal, groupFavLikesData }) => {
  return (
    <>
      <div className="groupFavLikeListContainer">
        <div className="section">
          <motion.div
            className="groupFavLikeList"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* <div className="groupFavLikeHeader">
              <div className="groupFavLikeHeader__text">내가 속한 팀</div>
            </div> */}
            {groupFavLikesData?.content?.map(data => (
              <motion.div
                className="groupFavLikeItem"
                key={data?.id}
                variants={itemVariants}
              >
                <div className="groupFavLikeItem__image__box">
                  <img
                    className="groupFavLikeItem__image"
                    src="assets/images/user.png"
                    alt="user"
                  />
                </div>

                <div className="groupFavLikeItem__text__wrapper">
                  <div className="groupFavLikeItem__header">
                    <div className="groupFavLikeItem__header__name">
                      {data.group.groupName}
                    </div>
                    <div className="groupFavLikeItem__header__num">
                      {data.group.memberCount}/{data.group.memberSizeLimit}
                    </div>
                  </div>

                  <div className="groupFavLikeItem__text">
                    <div className="groupFavLikeItem__label">
                      <p className="groupFavLikeItem__label__text">
                        {data?.group?.averageAgeOfMembers}
                      </p>
                    </div>
                    <div className="groupFavLikeItem__label">
                      <p className="groupFavLikeItem__label__text">
                        {data?.group?.majorsOfMembers[0]}{' '}
                      </p>
                    </div>
                  </div>
                  <div className="groupFavLikeItem__text">
                    <div className="groupFavLikeItem__label">
                      <p className="groupFavLikeItem__label__text">
                        {data?.group?.majorsOfMembers[1]}{' '}
                      </p>
                    </div>
                    <div className="groupFavLikeItem__label">
                      <p className="groupFavLikeItem__label__text">
                        {data?.group?.majorsOfMembers[2]}{' '}
                      </p>
                    </div>
                  </div>

                  <div className="groupFavLikeItem__major">
                    <p className="groupFavLikeItem__major__text">
                      {data?.group?.school}
                    </p>
                  </div>
                </div>
                <div className="groupFavLikeItem__button__wrapper">
                  <button className="groupFavLikeItem__button__fav">
                    <AiOutlineStar />
                  </button>
                  <button className="groupFavLikeItem__button__text">
                    요청
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default GroupFavList;