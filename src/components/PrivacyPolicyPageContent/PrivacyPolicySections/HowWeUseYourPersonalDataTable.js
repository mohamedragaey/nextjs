import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

function createData (Activity, TypeOfData, LegalJustification, Lawful) {
  return {Activity, TypeOfData, LegalJustification, Lawful}
}

const rows = [
  createData(
    'User signing up to the platform and creating an account',
    'Profile /Identity Data',
    'Consent',
    'We ask you for your name and email so that you can create an account with us. It also allows us to register you as a User to be able to enter into a contract with you. You must volunteer this information. We will not extract it from you without your consent.'
  ),
  createData(
    'When a User uses our live chat support and voluntarily leaves their email address or has previously logged into the Platform',
    'Contact Data',
    'Consent',
    'We ask you for your email so we can easily get back in touch with you and connect the conversation history to an individual. It also allows us to register you as a User to be able to enter into a contract with you.'
  ),
  createData(
    'To administer and protect our business including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data',
    'Technical Data',
    'Legitimate Interest',
    'for running our business, provision of administration and IT services, network security, to prevent fraud and in the context of a business reorganisation or group restructuring exercise'
  )
]

const HowWeUseYourPersonalDataTable = () => {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Activity</TableCell>
            <TableCell align="left" width={200}>Type of data</TableCell>
            <TableCell align="left" width={200}>Legal Justification</TableCell>
            <TableCell align="left">Lawful basis for processing data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Activity}>
              <TableCell component="th" scope="row">
                {row.Activity}
              </TableCell>
              <TableCell align="left">{row.TypeOfData}</TableCell>
              <TableCell align="left">{row.LegalJustification}</TableCell>
              <TableCell align="left">{row.Lawful}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default HowWeUseYourPersonalDataTable
