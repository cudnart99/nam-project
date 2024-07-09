import React, { useState } from "react";
import { Select, Table, Input, Image } from "antd";
import { age, listData, sex } from "./listData";
import HandPic from "../../assets/hand-1.png";
import DataScreenWrapper from "./styled";
export default function DataScreen() {
  const [data, setData] = useState(listData);
  const [ageValue, setAgeValue] = useState(null);
  const [sexValue, setSexValue] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const { Search } = Input;
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Giới tính",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Picture",
      dataIndex: "picture",
      key: "picture",
      render: () => {
        return (
          <>
            <img
              onClick={() => {
                // setImagePreview(HandPic);
              }}
              className="w-[150px] h-auto"
              alt=""
              src={HandPic}
            ></img>
          </>
        );
      },
    },
  ];

  const handleChangeAge = (value) => {
    if (value) {
      setAgeValue(value);
      setSexValue(null);
      setSearchValue(null);
      let searchData = listData.filter((item) => item.age == value);
      setData(searchData);
    } else {
      setAgeValue(null);
      setData(listData);
    }
  };

  const handleChangeSex = (value) => {
    if (value) {
      setSexValue(value);
      setAgeValue(null);
      setSearchValue(null);
      let searchData = listData.filter((item) => item.sex == value);
      setData(searchData);
    } else {
      setSexValue(null);
      setData(listData);
    }
  };

  const onSearch = (value) => {
    if (!value.trim()) {
      setSearchValue(null);
      setData(listData);
    } else {
      setSexValue(null);
      setAgeValue(null);
      setSearchValue(value);
      const searchData = listData.filter((item) =>
        Object.values(item).some(
          (value1) =>
            typeof value1 === "string" &&
            value1.toLowerCase().includes(value.toLowerCase())
        )
      );
      setData(searchData);
    }
  };

  return (
    <DataScreenWrapper>
      <div className="font-bold text-[40px] ml-3 my-2">Bảng Data</div>
      <div className="flex justify-between m-3">
        <div className="flex">
          <Select
            allowClear
            placeholder={"Tuổi"}
            style={{ width: 120, marginRight: 10 }}
            onChange={handleChangeAge}
            options={age}
            value={ageValue}
          />
          <Select
            allowClear
            placeholder={"Giới tính"}
            style={{ width: 120 }}
            onChange={handleChangeSex}
            options={sex}
            value={sexValue}
          />
        </div>
        <Search
          placeholder="Tìm kiếm..."
          allowClear
          onSearch={onSearch}
          style={{
            marginRight: 10,
            width: 300,
          }}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </div>
      <Table
        scroll={{
          y: "70vh",
        }}
        dataSource={data}
        columns={columns}
      />
    </DataScreenWrapper>
  );
}
