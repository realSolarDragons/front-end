import React from 'react';
import './GroupRequestPage.scss';
import { motion } from 'framer-motion';
import {
  containerVariants,
  itemVariants,
} from '../../../../constants/variants';
import {
  putBlindRequestsReject,
  putBlindRequestsAccept,
  deleteBlindRequests,
} from '../../GroupReqFavPageController';

const GroupRequestPage = ({ sendGroupsRequestsData, setIsModify }) => {
  const handleOnClickAcceptButton = id => {
    console.log(id);
    putBlindRequestsAccept(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  const handleOnClickRejectButton = id => {
    console.log(id);
    putBlindRequestsReject(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  const handleOnClickDeleteRequestButton = id => {
    console.log(id);
    deleteBlindRequests(id).then(result => {
      console.log(result);
      setIsModify(true);
    });
  };

  return (
    <div className="requestContainer">
      <div className="section">
        {/* <motion.div
          className="reciveRequestList"
          transition={{ duration: 0.5 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="reciveRequestHeader">
            <div className="reciveRequestHeader__text">받은 요청</div>
          </div>
          {receivedBlindRequestsData?.map(request => (
            <motion.div
              className="reciveRequestItem"
              key={request.blindRequestResponse.id}
              variants={itemVariants}
            >
              <div className="reciveRequestItem__image">
                <img src={request.blindRequestResponse.idealPhoto} alt="user" />
              </div>
              <div className="reciveRequestItem__text">
                <div className="reciveRequestItem__name">
                  {request.blindRequestResponse.username}
                </div>
              </div>
              <div className="reciveRequestItem__button">
                <button
                  className="acceptBtn"
                  onClick={() => {
                    handleOnClickAcceptButton(request.blindRequestResponse.id);
                  }}
                >
                  수락
                </button>
                <button
                  className="denyBtn"
                  onClick={() => {
                    handleOnClickRejectButton(request.blindRequestResponse.id);
                  }}
                >
                  거절
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
        <motion.div
          className="spendRequestList"
          transition={{ duration: 0.5 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="spendRequestHeader">
            <div className="spendRequestHeader__text">보낸 요청</div>
          </div>
          {sendGroupsRequestsData.map(request => (
            <motion.div
              className="spendRequestItem"
              key={request.id}
              variants={itemVariants}
            >
              <div className="spendRequestItem__text">
                <div className="spendRequest__text__wrapper">
                  <div className="spendRequest__header">
                    <div className="spendRequest__header__name">
                      {request.group.groupName}
                    </div>
                    <div className="spendRequest__header__num">
                      {request.group.memberCount}/
                      {request.group.memberSizeLimit}
                    </div>
                  </div>
                  <div className="spendRequest__text">
                    <div className="spendRequest__label">
                      <p className="spendRequest__label__text">
                        {request.group.gender}
                      </p>
                    </div>
                  </div>
                  <div className="spendRequest__text">
                    <div className="spendRequest__label">
                      <p className="spendRequest__label__text">
                        {request.group.school}{' '}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="spendRequestItem__age">{request.blindRequestResponse.age}</div> */}
              </div>
              <div
                className="spendRequestItem__button"
                onClick={() => {
                  handleOnClickDeleteRequestButton(request.group.id);
                }}
              >
                <button className="cancelBtn">취소</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GroupRequestPage;
