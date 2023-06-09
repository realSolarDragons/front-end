import API from '../../api';
import { basicApi } from '../../libs/config';

// export const postDriveType = async data => {
//   try {
//     const response = await basicApi.post(`${API.postDriveType}`, data);
//     if (response.status === 200) {
//       return [false, response.data];
//     } else {
//       return [response.data.error, response.data.message];
//     }
//   } catch (e) {
//     return [true, e.message];
//   }
// };

// export const postDoorController = async data => {
//   try {
//     const response = await basicApi.post(`${API.postDoorControl}`, data);
//     console.log(data);
//     if (response.status === 200) {
//       return [false, response.data];
//     } else {
//       return [response.data.error, response.data.message];
//     }
//   } catch (e) {
//     return [true, e.message];
//   }
// };

export const getGroupsMy = async () => {
  console.log('asdf');
  try {
    const response = await basicApi.get(`${API.getGroupsMy}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const getGroups = async () => {
  console.log('asasddf');
  try {
    const response = await basicApi.get(`${API.getGroups}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const getGroupMembers = async groupId => {
  try {
    const response = await basicApi.get(
      `${API.getGroupMembers}/${groupId}/members`
    );
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const getGroupMembersRequest = async groupId => {
  try {
    const response = await basicApi.get(
      `${API.getGroupMembersRequest}/${groupId}/members/requests`
    );
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const getOppositeGroups = async groupId => {
  try {
    const response = await basicApi.get(
      `${API.getOppositeGroups}/${groupId}/opposite-gender-groups`
    );
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const getGroupLikes = async groupId => {
  try {
    const response = await basicApi.get(
      `${API.getGroupLikes}/${groupId}/likes`
    );
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    console.log(e);
    return [true, e.message];
  }
};

export const getGroupReqs = async groupId => {
  try {
    const response = await basicApi.get(
      `${API.getGroupReqs}/${groupId}/dates/requests`
    );
    if (response.status === 200) {
      return [false, response.data];
    } else {
      console.log(response);
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    console.log(e);
    return [true, e.message];
  }
};

export const putGroupNewLeader = async (groupId, userId) => {
  try {
    const response = await basicApi.put(
      `${API.putGroupNewLeader}/${groupId}/leader/${userId}`
    );
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const getGroupsDetail = async groupId => {
  try {
    const response = await basicApi.get(`${API.getGroupsDetail}/${groupId}`);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

//postAcceptJoinRequestsGroup: '/groups/members/requests/',
/// deleteRejectJoinRequestsGroup:

export const postAcceptJoinRequestsGroup = async groupMemberRequestId => {
  try {
    const response = await basicApi.post(
      `${API.postAcceptJoinRequestsGroup}${groupMemberRequestId}`
    );
    console.log('response', response);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      console.log('response', response);
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    console.log('e', e);
    return [true, e.message];
  }
};

export const deleteRejectJoinRequestsGroup = async groupMemberRequestId => {
  try {
    const response = await basicApi.delete(
      `${API.deleteRejectJoinRequestsGroup}${groupMemberRequestId}`
    );
    console.log('response', response);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      console.log('response', response);
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    console.log('e', e);
    return [true, e.message];
  }
};

export const postGroupToGroupReqs = async (fromGroupId, toGroupId) => {
  try {
    const response = await basicApi.post(
      `${API.postGroupToGroupReqs}/${fromGroupId}/dates/requests/${toGroupId}`
    );
    console.log('response', response);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      console.log('response', response);
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    console.log('e', e);
    return [true, e.message];
  }
};

export const deleteGroupToGroupReqs = async (fromGroupId, toGroupId) => {
  try {
    const response = await basicApi.delete(
      `${API.deleteGroupToGroupReqs}/${fromGroupId}/dates/requests/${toGroupId}`
    );
    console.log('response', response);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      console.log('response', response);
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    console.log('e', e);
    return [true, e.message];
  }
};

export const postGroupToGroupLikes = async (fromGroupId, toGroupId) => {
  try {
    const response = await basicApi.post(
      `${API.postGroupToGroupLikes}/${fromGroupId}/likes/${toGroupId}`
    );
    console.log('response', response);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      console.log('response', response);
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    console.log('e', e);
    return [true, e.message];
  }
};

export const deleteGroupToGroupLikes = async (fromGroupId, toGroupId) => {
  try {
    const response = await basicApi.delete(
      `${API.deleteGroupToGroupLikes}/${fromGroupId}/likes/${toGroupId}`
    );
    console.log('response', response);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      console.log('response', response);
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    console.log('e', e);
    return [true, e.message];
  }
};

export const postGroupLeaderReqsAccept = async groupDateRequestId => {
  try {
    const response = await basicApi.post(
      `${API.postGroupLeaderReqsAccept}/dates/requests/${groupDateRequestId}`
    );
    console.log('response', response);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      console.log('response', response);
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    console.log('e', e);
    return [true, e.message];
  }
};

export const deleteGroupLeaderReqReject = async groupDateRequestId => {
  try {
    const response = await basicApi.delete(
      `${API.deleteGroupLeaderReqReject}/dates/requests/${groupDateRequestId}`
    );
    console.log('response', response);
    if (response.status === 200) {
      return [false, response.data];
    } else {
      console.log('response', response);
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    console.log('e', e);
    return [true, e.message];
  }
};
