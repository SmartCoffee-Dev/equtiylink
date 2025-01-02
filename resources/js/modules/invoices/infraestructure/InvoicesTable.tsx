import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { Invoice } from "../domain/Invoice.interface";
import { InvoiceFields } from "../domain/InvoiceFields.object";

interface InvoicesTableProps {

	invoices: Invoice[]

}

export const InvoicesTable = (props: InvoicesTableProps) => {


	const {invoices} = props

	return (
    <Table fullWidth aria-label="Invoices table" className="text-foreground">
      <TableHeader columns={InvoiceFields}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={invoices} emptyContent={"No invoices to display."}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );


}