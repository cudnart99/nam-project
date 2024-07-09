import styled from "styled-components";

const AiScreenWrapper = styled.div`
  .ant-upload-wrapper
    .ant-upload-list.ant-upload-list-picture-card
    .ant-upload-list-item-error {
    border-color: #47d0e2 !important;
  }
  .ant-upload-list-item {
    height: 500px !important;
    width: 300px !important;
  }
  .ant-upload-wrapper.ant-upload-picture-card-wrapper
    .ant-upload.ant-upload-select {
    height: 500px !important;
    width: 300px !important;
  }
`;

export default AiScreenWrapper;
