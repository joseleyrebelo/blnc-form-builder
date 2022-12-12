type Props = {
  sortedEmailData?: { label?: string; value: string }[];
};

const SubmitEmail = ({ sortedEmailData }: Props) => {
  return (
    <table role="presentation" border={0} cellPadding={0} cellSpacing={0}>
      <tr>
        <td>&nbsp;</td>
        <td>
          <div>
            <table role="presentation" className="main">
              <tr>
                <td>
                  <table
                    role="presentation"
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                  >
                    <tr>
                      <td>
                        {sortedEmailData &&
                          sortedEmailData.map(({ label, value }) => (
                            <div key={label}>
                              <p>
                                <b>{label}</b>
                              </p>
                              <p>{value}</p>
                            </div>
                          ))}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
  );
};

export default SubmitEmail;
