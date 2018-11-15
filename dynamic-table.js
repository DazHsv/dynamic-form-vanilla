(window => {
  class DynamicTable {
    constructor(table, headers) {
      this.table = table;
      this.body = null;
      this.headers = headers;
      this.__createTable();
    }
    __createTable() {
      const thead = document.createElement("thead");
      this.tbody = document.createElement("tbody");
      this.headers
        .map(header => {
          const th = document.createElement("th");
          th.innerText = header.toUpperCase();
          th.className = "data-table__header";
          return th;
        })
        .forEach(th => thead.appendChild(th));
      this.table.className = "data-table";
      thead.className = "data-table__header";
      this.tbody.className = "data-table__body";
      this.table.appendChild(thead);
      this.table.appendChild(this.tbody);
    }
    addRow(record) {
      if (this.headers.some(h => record[h] === undefined))
        throw new Error("Some headers doesn't are in the record object.");
      const tr = document.createElement("tr");
      this.headers
        .map(key => {
          const td = document.createElement("td");
          td.innerText = record[key];
          td.className = "data-table__row";
          return td;
        })
        .forEach(td => tr.appendChild(td));
      this.tbody.appendChild(tr);
    }
  }

  window.DynamicTable = DynamicTable;
})(this);
