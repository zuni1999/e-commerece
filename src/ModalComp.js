import React from 'react';
class ModalComp extends React.Component{
    render(){
        return <>
        <button className="btn btn-primary" data-toggle="modal" data-target="#click">Click me</button>
        <div className="modal fade" id="click">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1>hello world</h1>
                        <button className="close" data-dismiss="modal">x</button>
                    </div>
                    <div className="modal-body p-5">
                        <h3 className="modal-title">Itns new</h3>
                        <p>The Modal component is a dialog box/popup wind
                            ow that is displayed on top of the current page:</p>
                            <tr>
                                <td>Name</td>
                                <td><input type="text"></input></td>
                            </tr>
                        
                    </div>
                    <div className="modal-footer ">
                        <button className="btn btn-danger " data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    }
}
export default ModalComp;