// @mui
import { Grid } from "@mui/material";
// sections
import OweOwedPanel from "../../sections/OweOwedPanel";
import GroupTable from "../../sections/GroupTable";
import CategoryWiseDistribution from "../../sections/CategoryWiseDistribution";
import { TransactionEditView } from "../../sections/TransactionEditView";

export default function GroupDashboardPage() {
  return (
    <Grid container sx={{ pt: 5 }}>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <OweOwedPanel />
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        sx={{
          textAlign: "right",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TransactionEditView />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          textAlign: "right",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GroupTable />
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        sx={{
          textAlign: "right",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CategoryWiseDistribution />
      </Grid>
    </Grid>
  );
}
