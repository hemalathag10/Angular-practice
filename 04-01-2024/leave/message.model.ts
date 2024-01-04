// message.model.ts
export interface Message {
    content: string;
    sender: string;
    receiver: string;
    leave?: {
      employeeName:string;
      employeeId:number;
      reason: string;
      days: number;
      fromDate: string;
      toDate: string;
    };
  }
  