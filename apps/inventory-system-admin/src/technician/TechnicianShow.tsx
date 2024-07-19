import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TOWERSITE_TITLE_FIELD } from "../towerSite/TowerSiteTitle";
import { TECHNICIAN_TITLE_FIELD } from "./TechnicianTitle";

export const TechnicianShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="contact" source="contact" />
        <ReferenceManyField
          reference="MaintenanceRecord"
          target="technicianId"
          label="MaintenanceRecords"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="date" source="date" />
            <TextField label="details" source="details" />
            <TextField label="cost" source="cost" />
            <ReferenceField
              label="TowerSite"
              source="towersite.id"
              reference="TowerSite"
            >
              <TextField source={TOWERSITE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Technician"
              source="technician.id"
              reference="Technician"
            >
              <TextField source={TECHNICIAN_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
