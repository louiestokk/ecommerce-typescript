import React, { useState } from "react";
import { useStyles } from "./styles";
import { useParams } from "react-router-dom";
import { getProducts } from "../../redux/products/productsSlice";
import { useAppSelector } from "../../redux/hooks";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@material-ui/core";
type Props = {};
interface DetailsState {
  product: string[];
  id?: string;
}

const Productdetails: React.FC<Props> = () => {
  const products = useAppSelector(getProducts);
  const [state, setstate] = useState<DetailsState>({
    product: products.filter((el: any) => el.id === id),
    id: "",
  });
  const classes = useStyles();
  const { id } = useParams();
  console.log(products);
  return <div></div>;
};

export default Productdetails;
