import React, { useState } from "react";
import { Image, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AiScreenWrapper from "./styled";
import HandPic from "../../assets/hand-1.png";
import { listData } from "../DataScreen/listData";

export default function AiScreen() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  console.log(fileList, "fileList");

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          // width: "300px",
          // height: "500px",
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  return (
    <AiScreenWrapper>
      <div className="font-bold text-[40px] ml-3 my-2 mb-3">AI Screen</div>
      <div className="flex ml-3">
        <div className="h-[500px] w-[300px]">
          <Upload
            // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{
                display: "none",
              }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
            />
          )}
        </div>
        <div className="flex-1 h-[80vh] mx-10 flex flex-wrap justify-between">
          {listData.map((item, index) => {
            return (
              <div className="w-[300px] h-[400px] border-[5px] border-black mb-3 p-6 inline-block rounded-xl">
                <img
                  className="w-[250px] h-auto mb-1"
                  alt=""
                  src={HandPic}
                ></img>
                <div>
                  <span className="font-bold">Tên :</span> {item.name}
                </div>
                <div>
                  <span className="font-bold">Tuổi :</span> {item.age}
                </div>
                <div>
                  <span className="font-bold">Giới tính :</span> {item.sex}
                </div>
                <div>
                  <span className="font-bold">Địa chỉ :</span> {item.address}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AiScreenWrapper>
  );
}
