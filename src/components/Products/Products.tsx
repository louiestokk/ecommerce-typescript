import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import {
  Container,
  Typography,
  Grid,
  CardMedia,
  Card,
  CardContent,
  Box,
} from "@material-ui/core";
import { IProducts } from "../../models/IProduct";
import { fetchProducts } from "../../services/ProductsService";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { useAppDispatch } from "../../redux/hooks";
import { addProducts } from "../../redux/products/productsSlice";
interface Props {}
interface ProductsState {
  loading: boolean;
  products: any[];
  errormsg: string;
  id: string;
  url: string;
}

const Products: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [satet, setsatet] = useState<ProductsState>({
    loading: false,
    products: [] as IProducts[],
    errormsg: "",
    id: "",
    url: "",
  });
  const classes = useStyles();
  // const addData = (data: string[]) => {
  //   useAppDispatch(addProducts(data));
  // };
  useEffect(() => {
    setsatet({
      ...satet,
      loading: true,
    });
    fetchProducts("All")
      .then((resp) => {
        // addData(resp);
        setsatet({
          ...satet,
          loading: false,
          products: resp,
        });
      })
      .catch((error) => {
        setsatet({
          ...satet,
          loading: false,
          errormsg: error,
        });
      });
  }, []);

  return (
    <div>
      {satet.loading && (
        <Box className={classes.spinner}>
          <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            color="#075985"
            secondaryColor="green"
          />
        </Box>
      )}
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {satet?.products?.map((product) => {
            return (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card
                  className={classes.card}
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <CardMedia
                    image={product.image.url}
                    className={classes.cardMedia}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="h6">
                      {product.price.formatted_with_symbol}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
