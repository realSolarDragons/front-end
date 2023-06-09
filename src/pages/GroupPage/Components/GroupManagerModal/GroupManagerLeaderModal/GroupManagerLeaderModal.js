import React, { useEffect, useState } from 'react';
import './GroupManagerLeaderModal.scss';
import ModalBackButton from '../../../../../components/backButton/modalBackButton/ModalBackButton';
import { putGroupNewLeader } from '../../../GroupPageController';
import CommonModal from '../../../../../components/modal/commonModal/CommonModal';

const GroupManagerLeaderModal = ({
  groupMembersData,
  isGroupManagerModal,
  setIsGroupManagerModal,
  groupName,
  groupId,
  setIsJoinRequest,
  setIndex,
  groupDetailData,
  isModify,
  setIsModify,
}) => {
  const [leader, setLeader] = useState('');
  const [selectedMemberId, setSelectedMemberId] = useState(
    groupMembersData[0].member.id
  );
  const [selectedMemberName, setSelectedMemberName] = useState(
    groupMembersData[0].member.username
  );
  const [isModal, setIsModal] = useState(false);
  const [isAcceptModal, setIsAcceptModal] = useState(false);

  useEffect(() => {
    console.log('groupMembersData', groupMembersData);
    setLeader(groupMembersData.filter(item => item.role === 'LEADER'));
  }, []);

  const handleOnClickJoinRequest = () => {
    setIsJoinRequest(true);
    setIndex(-1);
  };

  const handleOnClickNewLeader = () => {
    setIsModal(true);
  };

  useEffect(() => {
    if (isAcceptModal === true) {
      putGroupNewLeader(groupId, selectedMemberId).then(res => {
        console.log('res', res);
        setIsModal(false);
        setIsAcceptModal(false);
        setIsModify(true);
      });
    }
  }, [isAcceptModal]);

  return (
    <>
      <div className="groupManagerModalContainer">
        {isModal && (
          <CommonModal
            children={`${selectedMemberName}님에게 팀장을 넘기시겠습니까?`}
            setIsModal={setIsModal}
            setIsAcceptModal={setIsAcceptModal}
          />
        )}
        <div className="groupManagerHeader">
          <ModalBackButton
            header={groupName}
            setIsGroupManagerModal={setIsGroupManagerModal}
          />
        </div>
        <div className="groupManagerBody">
          <div className="groupManagerBodyItem">
            <div className="groupManagerBodyItem__title">
              <p>
                팀장 <span>{leader[0]?.member?.username}</span>
              </p>
            </div>
            {groupDetailData?.myRole === 'LEADER' && (
              <div className="groupManagerBodyItem__button__wrapper">
                <button
                  className="groupManagerBodyItem__button"
                  onClick={() => {
                    handleOnClickJoinRequest();
                  }}
                >
                  팀원 신청 목록 확인
                </button>
              </div>
            )}
          </div>
          <div className="groupManagerBodyItem">
            <div className="groupManagerBodyItem__title">
              <p>팀원</p>
            </div>
            <div className="groupManagerBodyItem__member__image__wrapper">
              {groupMembersData
                ?.filter(member => member.role === 'MEMBER')
                ?.map(member => (
                  <div
                    className="groupManagerBodyItem__member__image__box"
                    key={member.member.id}
                    onClick={() => {
                      setSelectedMemberId(member.member.id);
                      setSelectedMemberName(member.member.username);
                    }}
                    style={{
                      border:
                        selectedMemberId === member.member.id
                          ? '2px solid #FFD262'
                          : 'none',
                    }}
                  >
                    <img
                      className="groupManagerBodyItem__member__image"
                      src={member.member.idealPhoto}
                      alt="user"
                    />
                  </div>
                ))}
            </div>
            {groupDetailData?.myRole === 'LEADER' && (
              <div className="groupManagerBodyItem__button__wrapper">
                <button
                  className="groupManagerBodyItem__button"
                  onClick={() => {
                    handleOnClickNewLeader();
                  }}
                >
                  팀장 넘기기
                </button>
                {/* <button className="groupManagerBodyItem__button">초대하기</button> */}
              </div>
            )}
          </div>
          <div className="groupManagerBodyItem">
            <div className="groupManagerBodyItem__title">
              <p>팀 소개</p>
            </div>
            <div className="groupManagerBodyItem__text">
              <p>{groupDetailData?.group?.memo}</p>
            </div>
            <div className="groupManagerBodyItem__button__wrapper">
              {/* <button className="groupManagerBodyItem__button">수정하기</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupManagerLeaderModal;
