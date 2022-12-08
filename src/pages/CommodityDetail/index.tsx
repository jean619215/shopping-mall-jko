import useQuery from "../../hooks/useQuery";

const CommodityDetail = () => {
  let query = useQuery();

  return (
    <div>
      CommodityDetail
      <div>id:{query.get("id")}</div>
    </div>
  );
};

export default CommodityDetail;
