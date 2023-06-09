import React, { useState, useEffect } from 'react';
import './GroupReqFavPage.scss';
import ReqFavSectionToggle from './Components/ReqFavSectionToggle/ReqFavSectionToggle';
import GroupRequestPage from './GroupReqFavType/GroupRequestPage/GroupRequestPage';
import GroupFavoritePage from './GroupReqFavType/GroupFavoritePage/GroupFavoritePage';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { getBlindRequests, getBlindLikes } from './GroupReqFavPageController';

const GroupReqFavPage = () => {
  const [section, setSection] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const [receivedBlindRequestsData, setReceivedBlindRequestsData] = useState(
    []
  );
  const [sendBlindRequestsData, setSendBlindRequestsData] = useState([]);
  const [blindLikesData, setBlindLikesData] = useState([]);
  const [renderBlindRequestPage, setRenderBlindRequestPage] = useState(false);
  const [renderBlindFavoritePage, setRenderBlindFavoritePage] = useState(false);
  const [isModify, setIsModify] = useState(false);

  useEffect(() => {
    getBlindRequests().then(result => {
      setReceivedBlindRequestsData(result[1].data.receivedBlindRequests);
      setSendBlindRequestsData(result[1].data.sendBlindRequests);
      setRenderBlindRequestPage(true);
      setIsModify(false);
    });
    getBlindLikes().then(result => {
      setBlindLikesData(result[1].data);
      setRenderBlindFavoritePage(true);
    });
  }, [isModify]);

  useEffect(() => {
    if (activeIndex === 0) {
      setSection('request');
    } else {
      setSection('favorite');
    }
  }, [activeIndex]);

  return (
    <div className="reqFavContainer">
      <div className="reqFavHeader">
        <div className="reqFavBackButtonContainer">
          <button className="reqFavBackButton" onClick={() => navigate(-1)}>
            <MdOutlineArrowBackIosNew />
          </button>
        </div>

        <ReqFavSectionToggle
          title="reqFav"
          setSection={setSection}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>

      <div className="reqFavBody">
        {section === 'request' && renderBlindRequestPage && (
          <GroupRequestPage
            receivedBlindRequestsData={receivedBlindRequestsData}
            sendBlindRequestsData={sendBlindRequestsData}
            setIsModify={setIsModify}
          />
        )}
        {section === 'favorite' && renderBlindFavoritePage && (
          <GroupFavoritePage
            blindLikesData={blindLikesData}
            setIsModify={setIsModify}
          />
        )}
      </div>
    </div>
  );
};

export default GroupReqFavPage;
