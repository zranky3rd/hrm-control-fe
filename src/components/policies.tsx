import * as React from "react";
import {
  Create,
  CreateButton,
  Datagrid,
  DateInput,
  List,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  TopToolbar,
  required
} from "react-admin";
import constants from "./constants";

const func1 = () => {
  console.log("test");
};

const PoliciesListActions = () => (
  <TopToolbar>
    <CreateButton />
  </TopToolbar>
);
export const Policies = () => {
  return (
    <List
      title={`${constants.title} > Policies`}
      actions={<PoliciesListActions />}
    >
      <Datagrid rowClick="edit" onClick={func1} bulkActionButtons={false}>
        <TextField source="id" />
        <TextField source="name" />
      </Datagrid>
    </List>
  );
};

const inputAlignStyle: React.CSSProperties = {
  float: "left",
  marginRight: "20px",
};

const prodYears = [
  { id: "2023", name: "2023" },
  { id: "2022", name: "2022" },
  { id: "2021", name: "2021" },
  { id: "2020", name: "2020" },
  { id: "2019", name: "2019" },
  { id: "2018", name: "2018" },
  { id: "2017", name: "2017" },
  { id: "2016", name: "2016" },
  { id: "2015", name: "2015" },
  { id: "2014", name: "2014" },
  { id: "2013", name: "2013" },
  { id: "2012", name: "2012" },
  { id: "2011", name: "2011" },
  { id: "2010", name: "2010" },
];
const pordMonths = [
  { id: "1", name: "1" },
  { id: "2", name: "2" },
  { id: "3", name: "3" },
  { id: "4", name: "4" },
  { id: "5", name: "5" },
  { id: "6", name: "6" },
  { id: "7", name: "7" },
  { id: "8", name: "8" },
  { id: "9", name: "9" },
  { id: "10", name: "10" },
  { id: "11", name: "11" },
  { id: "12", name: "12" },
];
const projects = [
  { id: "prj1", name: "project1" },
  { id: "prj2", name: "project2" },
  { id: "prj3", name: "project3" },
  { id: "prj4", name: "project4" },
  { id: "prj5", name: "project5" },
  { id: "prj6", name: "project6" },
  { id: "prj7", name: "project7" },
  { id: "prj8", name: "project8" },
];

const fwVers = [
  { id: "fw1", name: "ver1" },
  { id: "fw2", name: "ver2" },
  { id: "fw3", name: "ver3" },
  { id: "fw4", name: "ver4" },
  { id: "fw5", name: "ver5" },
  { id: "fw6", name: "ver6" },
  { id: "fw7", name: "ver7" },
];

const models = [
  { id: "model1", name: "model1" },
  { id: "model2", name: "model2" },
  { id: "model3", name: "model3" },
  { id: "model4", name: "model4" },
];

const factories = [
  { id: "fac1", name: "fac1" },
  { id: "fac2", name: "fac2" },
  { id: "fac3", name: "fac3" },
  { id: "fac4", name: "fac4" },
  { id: "fac5", name: "fac5" },
  { id: "fac6", name: "fac6" },
];

const countries = [
  { id: "kr", name: "kr" },
  { id: "us", name: "us" },
  { id: "eu", name: "eu" },
  { id: "ru", name: "ru" },
  { id: "ch", name: "ch" },
  { id: "jp", name: "jp" },
];

export const PolicyCreate = () => (
  <Create>
    <SimpleForm>
      <h3 style={{ marginLeft: "10px" }}>Target devices</h3>
      <SelectInput
        source="type"
        validate={[required()]}
        choices={[
          { id: "ref", name: "refrigerator" },
          { id: "wm", name: "washing machine" },
          { id: "ac", name: "air conditioner" },
        ]}
      />
      <div>
        <SelectArrayInput
          label="Year of production"
          source="prod_year"
          choices={prodYears}
          style={inputAlignStyle}
        />
        <SelectArrayInput
          label="Month of production"
          source="prod_month"
          choices={pordMonths}
          style={inputAlignStyle}
        />
        <SelectArrayInput
          source="project"
          choices={projects}
          style={inputAlignStyle}
        />
      </div>
      <div>
        <SelectArrayInput
          label="Firmware version"
          source="fw_ver"
          choices={fwVers}
          style={inputAlignStyle}
        />
        <SelectArrayInput
          label="Model"
          source="model"
          choices={models}
          style={inputAlignStyle}
        />
        <SelectArrayInput
          label="Factory code"
          source="factory"
          choices={factories}
          style={inputAlignStyle}
        />
      </div>
      <div>
        <SelectArrayInput
          label="Country code"
          source="contry"
          choices={countries}
          style={inputAlignStyle}
        />
      </div>
    </SimpleForm>

    <SimpleForm>
      <h3 style={{ marginLeft: "10px" }}>Target error</h3>
      <SelectInput
        label="Code type"
        source="code_type"
        validate={[required()]}
        choices={[
          { id: "ct1", name: "codeType1" },
          { id: "ct2", name: "codeType2" },
          { id: "ct3", name: "codeType3" },
          { id: "ct4", name: "codeType4" },
        ]}
      />
      <div>
        <SelectInput
          disabled={true}
          label="Error code"
          source="error_code"
          validate={[required()]}
          choices={[
            { id: "5c", name: "5c" },
            { id: "3c", name: "3c" },
            { id: "2c", name: "2c" },
            { id: "1c", name: "1c" },
          ]}
          style={inputAlignStyle}
        />
        <SelectInput
          disabled={true}
          label="Non-failure code"
          source="non_failure_code"
          validate={[required()]}
          choices={[
            { id: "ct1", name: "codeType1" },
            { id: "ct2", name: "codeType2" },
            { id: "ct3", name: "codeType3" },
            { id: "ct4", name: "codeType4" },
          ]}
          style={inputAlignStyle}
        />
        <SelectInput
          label="Target duration"
          source="target_duration"
          validate={[required()]}
          choices={[
            { id: "td1", name: "targetDuration1" },
            { id: "td2", name: "targetDuration2" },
            { id: "td3", name: "targetDuration3" },
          ]}
          style={inputAlignStyle}
        />
        <SelectInput
          label="Abnormality rate"
          source="abnormality_rate"
          validate={[required()]}
          choices={[
            { id: "ar1", name: "25%" },
            { id: "ar1", name: "50%" },
            { id: "ar1", name: "75%" },
            { id: "ar1", name: "100%" },
          ]}
          style={inputAlignStyle}
        />
      </div>
    </SimpleForm>

    <SimpleForm>
      <h3 style={{ marginLeft: "10px" }}>Target information check & release</h3>
      <TextInput
        disabled={true}
        source="target"
        validate={[required()]}
        defaultValue="normality: /abnormality: /total:"
        fullWidth
      />
      <div>
        <SelectInput
          disabled={true}
          label="Collecting period"
          source="period"
          validate={[required()]}
          choices={[
            { id: "p1", name: "1 sec" },
            { id: "p2", name: "1 minute" },
            { id: "p3", name: "1 hour" },
          ]}
          style={inputAlignStyle}
        />
        <DateInput
          label="Start date"
          source="start_at"
          defaultValue={new Date()}
          validate={[required()]}
          style={inputAlignStyle}
        />
        <DateInput
          label="End date"
          source="end_at"
          defaultValue={new Date()}
          validate={[required()]}
          style={inputAlignStyle}
        />
        <TextInput
          disabled={true}
          label='Amount of data'
          source="amount"
          defaultValue=""
        />
      </div>
    </SimpleForm>
  </Create>
);
