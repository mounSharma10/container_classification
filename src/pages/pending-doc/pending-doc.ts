import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pending-doc',
  imports: [RouterModule],
  templateUrl: './pending-doc.html',
  styleUrl: './pending-doc.scss',
})
export class PendingDoc {
pandingDocs = 
[
  {
    "fileName": "NLDIndia.pdf",
    "status": "Review Pending",
    "source": "API",
    "action": "Review",

  },
  {
    "fileName": "Dummy_Document.pdf",
    "status": "Review Pending",
    "source": "Email",
    "action": "Review",

  },
  {
    "fileName": "testdocument.pdf",
    "status": "Review Pending",
    "source": "Email",
    "action": "Review",
  },
  {
    "fileName": "document.pdf",
    "status": "Review Pending",
    "source": "API",
    "action": "Review",
  },
  {
    "fileName": "test.pdf",
    "status": "Review Pending",
    "source": "Email",
    "action": "Review",
  }
]

}